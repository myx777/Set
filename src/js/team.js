import Character from './Character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Character is already a member of the team');
    }

    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}
