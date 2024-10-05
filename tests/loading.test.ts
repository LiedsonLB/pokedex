import { mount } from '@vue/test-utils';
import Loading from '../src/components/Loading.vue';
import { describe, it, expect } from 'vitest';

describe('Loading Component', () => {
    it('Rederizar texto', () => {
        const wrapper = mount(Loading);
        expect(wrapper.text()).toContain('Carregando...');
    });
    it('Renderizar imagem', () => {
        const wrapper = mount(Loading);
        expect(wrapper.find('img').exists()).toBe(true);
    });
});
