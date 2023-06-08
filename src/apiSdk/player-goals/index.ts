import axios from 'axios';
import queryString from 'query-string';
import { PlayerGoalInterface, PlayerGoalGetQueryInterface } from 'interfaces/player-goal';
import { GetQueryInterface } from '../../interfaces';

export const getPlayerGoals = async (query?: PlayerGoalGetQueryInterface) => {
  const response = await axios.get(`/api/player-goals${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createPlayerGoal = async (playerGoal: PlayerGoalInterface) => {
  const response = await axios.post('/api/player-goals', playerGoal);
  return response.data;
};

export const updatePlayerGoalById = async (id: string, playerGoal: PlayerGoalInterface) => {
  const response = await axios.put(`/api/player-goals/${id}`, playerGoal);
  return response.data;
};

export const getPlayerGoalById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/player-goals/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePlayerGoalById = async (id: string) => {
  const response = await axios.delete(`/api/player-goals/${id}`);
  return response.data;
};
