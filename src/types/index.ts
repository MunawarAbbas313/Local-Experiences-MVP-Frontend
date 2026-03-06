export interface User {
  userId: string;
  name: string;
  email: string;
  role: "traveler" | "host";
  profilePic: string;
  bio: string;
  languages?: string[];
  createdAt?: string;
  joinedDate?: string;
}

export interface Experience {
  experienceId: string;
  hostId: string;
  title: string;
  description: string;
  category: string;
  location: {
    lat: number;
    lng: number;
    city: string;
    address: string;
    country?: string;
  };
  tags: string[];
  price: number;
  duration: number; // in minutes
  availability: string[]; // ISO date strings
  photos: string[];
  createdAt?: string;
  rating: number;
  reviewsCount: number;
}

export interface Review {
  reviewId: string;
  experienceId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt?: string;
  date?: string;
}

export interface Comment {
  commentId: string;
  experienceId: string;
  userId: string;
  text: string;
  createdAt?: string;
  date?: string;
  replies?: Comment[];
}

export interface Booking {
  bookingId: string;
  experienceId: string;
  userId: string;
  slot: string;
  guestCount: number;
  status: "booked" | "cancelled" | "completed";
  amount: number;
  createdAt: string;
}

export interface SavedItinerary {
  itineraryId: string;
  userId: string;
  experienceIds: string[];
  title: string;
  createdAt: string;
}
