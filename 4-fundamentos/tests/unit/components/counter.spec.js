import Counter from '@/components/Counter';
import {shallowMount} from '@vue/test-utils';

describe('Counter component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    })
    // test('Debe hacer igual a la foto', () => {
    //     const wrapper = shallowMount(Counter);

    //     expect(wrapper.html()).toMatchSnapshot();
    // })

    test('h2 debe tener un valor por defecto', () => {

        expect(wrapper.find('h2').exists()).toBeTruthy();

        expect(wrapper.find('h2').text()).toBe('Counter');
    })

    test('El valor del parrafo por defecto debe ser 100', () => {

        const counterP = wrapper.find('[data-testid="counterP"]');

        expect(counterP.exists()).toBeTruthy();

        expect(counterP.text()).toBe('10');
    })

    test('debe restar en 1 el valor del contador', async () => {

        const btnDecrement = wrapper.find('button')

        await btnDecrement.trigger('click')

        const counterP = wrapper.find('[data-testid="counterP"]')

        expect(counterP.exists()).toBeTruthy()

        expect(counterP.text()).toBe('9')
    })

    test('debe incrementar en 1 el valor del contador', async () => {

        const [,btnIncrement] = wrapper.findAll('button')

        await btnIncrement.trigger('click')

        const counterP = wrapper.find('[data-testid="counterP"]')

        expect(counterP.exists()).toBeTruthy()

        expect(counterP.text()).toBe('11')
    })

    test('verificar valor props', async () => {

        const {start} = wrapper.props()

        expect(start).toBe(10)
    })

    test('h2 debe tener un titulo desde props', () => {

        const title = "Counter title"

        const wrapper = shallowMount(Counter, {
            props: {
                title: title
            }
        })

        expect(wrapper.find('h2').text()).toBe(title);
    })
})