import { mount } from "@vue/test-utils";
import Greeting from "@/components/Greeting.vue";

describe("Greeting.vue", () => {
  test("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(Greeting, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
