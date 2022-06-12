import Indecision from '@/components/Indecision';
import {shallowMount} from '@vue/test-utils';

describe('Indecision component', () => {
    let wrapper
    let clgSpy

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            'answer': 'yes',
            'forced': false,
            'image': 'https://yesno.wtf/assets/yes/0.gif',
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision);

        clgSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()
    })

    test('Debe ser igual a la foto', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('escribir en el campo no debe hacer nada', async () => {
        const getAswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        
        const input = wrapper.find('input')
        await input.setValue('Hola mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)

        expect(getAswerSpy).not.toHaveBeenCalled()

    })

    test('escribir ? en el campo debe ejecutar la tarea', async () => {
        const getAswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        
        const input = wrapper.find('input')
        await input.setValue('Hola mundo?')

        expect(clgSpy).toHaveBeenCalledTimes(1)

        expect(getAswerSpy).toHaveBeenCalledTimes(1)
    })

    test('pruebas en getAswer', async () => {

        await wrapper.vm.getAnswer()
        const img = wrapper.find('img');
        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.image).toBe('https://yesno.wtf/assets/yes/0.gif')
        expect(wrapper.vm.answer).toBe('Sí')
    })
    
    test('pruebas en getAswer - fallo en el api', async() => {

        fetch.mockImplementationOnce(() => Promise.reject('Error'))

        await wrapper.vm.getAnswer()
        
        const img = wrapper.find('img');
        expect(wrapper.vm.answer).toBe('No se pudo obtener la respuesta')
        expect(img.exists()).toBeFalsy()
    })
})