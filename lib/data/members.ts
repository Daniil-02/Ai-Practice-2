export type CombatRole = "Танк" | "Хілер" | "ДПС";
export type GuildRank = "Офіцер" | "Учасник";

export type Member = {
  id: string;
  nickname: string;
  role: CombatRole;
  rank: GuildRank;
  activeStatus: string;
  characterClass: string;
};

// ЗАГЛУШКА: реалізація на кроці 13
export async function listMembers(_roleFilter?: string): Promise<Member[]> {
  return [];
}
