import type { CombatRole } from "./members";

export type EventStatus = "Набір відкрито" | "Завершено";
export type RegistrationStatus = "Основний склад" | "Резерв";

export type EventRegistration = {
  id: string;
  eventId: string;
  nickname: string;
  role: CombatRole;
  rank: string;
  status: RegistrationStatus;
};

export type GuildEvent = {
  id: string;
  title: string;
  dateTime: string;
  description: string;
  maxSlots: number;
  status: EventStatus;
  tier: string;
  registrations: EventRegistration[];
};

export type CreateEventInput = {
  title: string;
  dateTime: string;
  description: string;
  maxSlots: number;
};

// ЗАГЛУШКА: реалізація на кроці 13
export async function listEvents(_statusFilter?: string): Promise<GuildEvent[]> {
  return [];
}

// ЗАГЛУШКА: реалізація на кроці 13
export async function getEventById(_id: string): Promise<GuildEvent | null> {
  return null;
}

// ЗАГЛУШКА: реалізація на кроці 13
export async function createEvent(input: CreateEventInput): Promise<GuildEvent> {
  return {
    id: "",
    title: input.title,
    dateTime: input.dateTime,
    description: input.description,
    maxSlots: input.maxSlots,
    status: "Набір відкрито",
    tier: "Рейд · Міфічний",
    registrations: [],
  };
}

// ЗАГЛУШКА: реалізація на кроці 13
export async function registerForEvent(
  eventId: string,
  nickname: string,
  role: CombatRole
): Promise<EventRegistration> {
  return {
    id: "",
    eventId,
    nickname,
    role,
    rank: "Учасник",
    status: "Основний склад",
  };
}

// ЗАГЛУШКА: реалізація на кроці 13
export async function cancelRegistration(
  _eventId: string,
  _nickname: string
): Promise<void> {}

// ЗАГЛУШКА: реалізація на кроці 13
export async function toggleRegistrationStatus(
  _eventId: string,
  _nickname: string
): Promise<void> {}

// ЗАГЛУШКА: реалізація на кроці 13
export async function closeEventRecruitment(_eventId: string): Promise<void> {}
