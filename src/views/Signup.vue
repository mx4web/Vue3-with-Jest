<template>
  <div>
    <h1>Vue 3 + VeeValidate - Sign Up</h1>
    <div>
      <Form @submit="onSubmit" v-slot="{ errors }">
        <div class="form-row">
          <div class="form-group">
            <label>First Name</label>
            <Field
              name="firstName"
              type="text"
              :rules="isRequired"
              class="form-control"
              :class="{ 'is-invalid': errors.firstName }"
            />
            <div class="invalid-feedback">{{ errors.firstName }}</div>
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <Field
              name="lastName"
              type="text"
              :rules="isRequired"
              class="form-control"
              :class="{ 'is-invalid': errors.lastName }"
            />
            <div class="invalid-feedback">{{ errors.lastName }}</div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col">
            <label>Password</label>
            <Field
              name="password"
              type="password"
              :rules="isRequired"
              class="form-control"
              :class="{ 'is-invalid': errors.password }"
            />
            <div class="invalid-feedback">{{ errors.password }}</div>
          </div>
          <div class="form-group col">
            <label>Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              :rules="isRequired"
              class="form-control"
              :class="{ 'is-invalid': errors.confirmPassword }"
            />
            <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
          </div>
        </div>
        <div class="form-group form-check">
          <Field
            name="acceptTerms"
            type="checkbox"
            :rules="isRequired"
            id="acceptTerms"
            value="true"
            class="form-check-input"
            :class="{ 'is-invalid': errors.acceptTerms }"
          />
          <label for="acceptTerms" class="form-check-label">
            Accept Terms & Conditions
          </label>
          <div class="invalid-feedback">{{ errors.acceptTerms }}</div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
import { Field, Form } from "vee-validate";
export default {
  components: {
    Form,
    Field
  },
  setup() {
    const isRequired = value => {
      return value ? true : "This field is required";
    };

    const onSubmit = values => {
      console.log(values);
    };

    return { isRequired, onSubmit };
  }
};
</script>
<style scoped>
.invalid-feedback {
  color: red;
}
</style>
