interface HeaderProperties {
  profileImage?: string;
  username?: string;
  onlineUsersNumber?: number;
}

export interface MainProps {
  showHeader?: boolean;
  headerProperties?: HeaderProperties; 
}