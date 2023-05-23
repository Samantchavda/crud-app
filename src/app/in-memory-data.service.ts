import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
      { id: 4, name: 'stive', email: 'stive@example.com' },
      { id: 5, name: 'jack', email: 'jack@example.com' },
      { id: 6, name: 'mark', email: 'mark@example.com' },
      { id: 7, name: 'stella', email: 'stella@example.com' }
    ];

    return { users };
  }
}