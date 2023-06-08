const mapping: Record<string, string> = {
  academies: 'academy',
  coaches: 'coach',
  exercises: 'exercise',
  goals: 'goal',
  parents: 'parent',
  players: 'player',
  'player-exercises': 'player_exercise',
  'player-goals': 'player_goal',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
