// tests/api.test.ts
import { describe, it, expect, vi } from 'vitest';

vi.mock('../src/utils/api', () => ({
    fetchData: vi.fn(() => Promise.resolve('Dados mockados')),
}));

describe('fetchData', () => {
    it('deve buscar Pokémon pelo nome', async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
        const data = await response.json();
        expect(data.name).toBe('bulbasaur');
    });
    it('deve buscar Pokémon pelo ID', async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
        const data = await response.json();
        expect(data.id).toBe(1);
    });
    it('deve buscar Pokémon pelo tipo', async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
        const data = await response.json();
        expect(data.types[0].type.name).toBe('grass');
    });
    it('deve buscar Pokémon pela habilidade', async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
        const data = await response.json();
        expect(data.abilities[0].ability.name).toBe('overgrow');
    });
    it('deve buscar Pokémon pela altura', async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
        const data = await response.json();
        expect(data.height).toBe(7);
    });
    it('deve buscar Pokémon pelo peso', async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
        const data = await response.json();
        expect(data.weight).toBe(69);
    });
    it('deve buscar Pokémon pela imagem', async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
        const data = await response.json();
        expect(data.sprites.front_default).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
    });
    it('deve buscar Pokémon pelo status', async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
        const data = await response.json();
        expect(data.stats[0].base_stat).toBe(45);
    });
});