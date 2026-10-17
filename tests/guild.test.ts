import { describe, expect, it } from "vitest";
import { listMembers } from "@/lib/data/members";
import {
  createEvent,
  getEventById,
  listEvents,
  registerForEvent,
} from "@/lib/data/events";
import {
  addComment,
  hideComment,
  listCommentsByEvent,
} from "@/lib/data/comments";

describe("Критерії приймання MVP гільдії Shadow Vanguard", () => {
  it("фільтр за роллю Танк повертає лише учасників із роллю Танк", async () => {
    const tanks = await listMembers("Танк");
    expect(tanks.length).toBeGreaterThan(0);
    expect(tanks.every((m) => m.role === "Танк")).toBe(true);
  });

  it("після створення нова подія з'являється у розкладі зі статусом Набір відкрито", async () => {
    const uniqueTitle = "Штурм Цитаделі Смерті";
    await createEvent({
      title: uniqueTitle,
      dateTime: "Пт, 24 травня · 20:00",
      description: "Збір за 15 хвилин до старту рейду",
      maxSlots: 10,
    });
    const events = await listEvents();
    const created = events.find((e) => e.title === uniqueTitle);
    expect(created).toBeDefined();
    expect(created?.status).toBe("Набір відкрито");
  });

  it("порожня назва або ліміт місць менше 1 не створює подію", async () => {
    await expect(
      createEvent({
        title: "   ",
        dateTime: "Сб, 25 травня · 19:00",
        description: "Тестовий опис",
        maxSlots: 0,
      })
    ).rejects.toThrow();
  });

  it("запис понад ліміт місць основного складу додає гравця у Резерв", async () => {
    const ev = await createEvent({
      title: "Мала вилазка у катакомби",
      dateTime: "Нд, 26 травня · 21:00",
      description: "Перевірка ліміту слотів",
      maxSlots: 1,
    });
    const first = await registerForEvent(ev.id, "Kaelthas", "ДПС");
    const second = await registerForEvent(ev.id, "Sylvanas", "ДПС");
    const updated = await getEventById(ev.id);

    expect(first.status).toBe("Основний склад");
    expect(second.status).toBe("Резерв");
    expect(updated?.registrations.length).toBe(2);
  });

  it("приховування коментаря офіцером змінює його текст на повідомлення модератора", async () => {
    const comment = await addComment("1", "Varian", "Суперечливий коментар у стрічці");
    await hideComment(comment.id);
    const comments = await listCommentsByEvent("1");
    const hidden = comments.find((c) => c.id === comment.id);

    expect(hidden?.isHidden).toBe(true);
    expect(hidden?.text).toBe("Повідомлення приховано модератором");
  });
});
