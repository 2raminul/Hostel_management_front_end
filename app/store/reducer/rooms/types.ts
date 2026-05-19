export type Bed = {
  id: number;
  bedLabel: string;
  isOccupied: boolean;
  remarks?: string;
};

export type Room = {
  id: number;
  roomNumber: string;
  description?: string;
  totalBeds: number;
  occupiedBeds?: number;
  availableBeds?: number;
};

export type RoomDetail = Room & {
  beds: Bed[];
};

export type AddRoomType = {
  roomNumber: string;
  description?: string;
  totalBeds: number;
};

export type AddBedType = {
  roomId: number;
  bedLabel: string;
  remarks?: string;
};
