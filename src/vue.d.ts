declare module '@/components/MyComponent.vue' {
  import { DefineComponent } from 'vue'
  interface MyComponentProps {
    items: string[]
    selected: number
  }
  const component: DefineComponent<MyComponentProps>
  export default component
}