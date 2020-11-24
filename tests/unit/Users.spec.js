import { mount } from "@vue/test-utils";
import { createStore } from "@/store";
import Users from "@/components/Users";

describe("Users.vue", () => {
  test("global", () => {
    const store = createStore();
    const wrapper = mount(Users, {
      global: {
        plugins: [store]
      }
    });
  });
});
