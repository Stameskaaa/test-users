import { User } from '../types/types';

export const mockUsersObj: Record<string, User> = Object.fromEntries(
  Array.from({ length: 1000000 }, (_, i) => {
    const id = (i + 1).toString();
    return [
      id,
      {
        name: `User ${id}`,
        department: `Department ${(i % 5) + 1}`,
        company: `Company ${(i % 3) + 1}`,
        jobTitle: `Job Title ${(i % 10) + 1}`,
      },
    ];
  }),
);

export const imgSrc = 'https://cdn-icons-png.flaticon.com/512/266/266033.png';
