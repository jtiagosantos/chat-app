import { generateToken } from 'npm-rtg';

export const generateRoomCode = () => {
  const roomCode = generateToken(30);

  return roomCode;
}