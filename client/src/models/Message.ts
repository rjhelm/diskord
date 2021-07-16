import { User } from "./User";

export interface Message {
    id: number;
    user: User;
    content: String;
    isFirst: boolean;
    timestamp: string;
}

export interface MessageProps {
    message: Message[];
}