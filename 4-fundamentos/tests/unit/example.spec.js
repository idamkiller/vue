// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('Example Component', () => {
  test('Debe ser mayor a 10', () => {
    let value = 5;
    value += 6;
    expect(value).toBeGreaterThan(10);
  })
})