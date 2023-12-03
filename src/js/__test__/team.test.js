import Team from '../team';
import Character from '../Character';

describe('team class', () => {
  test('testing method add', () => {
    const character = new Character('Vania', 'Bowman');
    const team = new Team();

    team.add(character);

    expect(team.members.has(character)).toBe(true);
  });

  test('if an existing character is added, an error should be thrown', () => {
    const character = new Character('Vania', 'Bowman');
    const team = new Team();
    team.add(character);

    expect(() => team.add(character)).toThrow('Character is already a member of the team');
  });

  test('testing method addAll (add an arbitrary number of characteres to the team)', () => {
    const character1 = new Character('Vania', 'Bowman');
    const character2 = new Character('Vala', 'Swordsman');
    const character3 = new Character('Igor', 'Magician');
    const team = new Team();

    team.addAll(character1, character2, character3);

    expect(team.toArray()).toEqual([character1, character2, character3]);
  });

  test('testing method toArray (return array of team)', () => {
    const character = new Character('Vania', 'Bowman');

    const team = new Team();
    team.add(character);

    expect(team.toArray()).toEqual([character]);
  });
});
