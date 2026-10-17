export type EventComment = {
  id: string;
  eventId: string;
  author: string;
  time: string;
  text: string;
  reportsCount: number;
  isHidden: boolean;
};

// ЗАГЛУШКА: реалізація на кроці 13
export async function listCommentsByEvent(_eventId: string): Promise<EventComment[]> {
  return [];
}

// ЗАГЛУШКА: реалізація на кроці 13
export async function addComment(
  eventId: string,
  author: string,
  text: string
): Promise<EventComment> {
  return {
    id: "",
    eventId,
    author,
    time: "Щойно",
    text,
    reportsCount: 0,
    isHidden: false,
  };
}

// ЗАГЛУШКА: реалізація на кроці 13
export async function reportComment(_commentId: string): Promise<void> {}

// ЗАГЛУШКА: реалізація на кроці 13
export async function hideComment(_commentId: string): Promise<void> {}
