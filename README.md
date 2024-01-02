# next-prisma-clerk-auth

App made with [Next](https://nextjs.org/), [Prisma](https://www.prisma.io/) as the ORM, [Clerk](https://clerk.com/) for authentication, and [Neon](https://neon.tech/) as database.

The goal is to keep user data in sync between Clerk and the database using a webhook: when a new user signs up in Clerk, the user data will be added to the database. This way I can use relations between users and any new entity on db.

### To Do:

- deploy
