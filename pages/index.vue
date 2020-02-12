<template>
  <v-layout row justify-center align-center>
    <v-stepper v-model="step" :vertical="vertical">
      <template v-for="(question, index) in questions">
        <v-stepper-step editable :key="`${question.id}-step`" :step="index+1">{{question.label}}</v-stepper-step>
        <v-stepper-content :key="`${question.id}-content`" :step="index+1">
          <v-radio-group v-model="group[index]" @change="compute()">
            <v-radio
              v-for="option in question.options"
              :key="option.id"
              :label="option.label"
              :value="option.value"
            ></v-radio>
          </v-radio-group>
          <v-btn color="primary" @click="next()" v-if="index!==questions.length-1">Continue</v-btn>
          <v-btn @click="previous()" v-if="index!==0">Back</v-btn>
        </v-stepper-content>
      </template>
    </v-stepper>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      group: [],
      questions: [
        {
          id: 'q1',
          label: 'How much code will I write ?',
          options: [
            {
              id: 'q1o1',
              label: 'Nothing, just a typo',
              value: 0
            },
            {
              id: 'q1o2',
              label: 'Little (1 class or controller)',
              value: 1
            },
            {
              id: 'q1o3',
              label: 'A few (3-4 classes and controllers, views)',
              value: 2
            },
            {
              id: 'q1o4',
              label: 'A lot',
              value: 3
            }
          ]
        },
        {
          id: 'q2',
          label: 'Complicated tests ?',
          options: [
            {
              id: 'q2o1',
              label: 'No',
              value: 0
            },
            {
              id: 'q2o2',
              label: 'Yes',
              value: 1
            }
          ]
        },
        {
          id: 'q3',
          label: 'Unclear specifications ?',
          options: [
            {
              id: 'q3o1',
              label: 'No',
              value: 0
            },
            {
              id: 'q3o2',
              label: 'Yes',
              value: 1
            }
          ]
        },
        {
          id: 'q4',
          label: 'External dependencies ?',
          options: [
            {
              id: 'q4o1',
              label: 'No',
              value: 0
            },
            {
              id: 'q4o2',
              label: 'Yes',
              value: 1
            }
          ]
        },
        {
          id: 'q5',
          label: 'Already done in a similar project ?',
          options: [
            {
              id: 'q5o1',
              label: 'No',
              value: 0
            },
            {
              id: 'q5o2',
              label: 'Yes',
              value: -1
            }
          ]
        }
      ],
      step: 1,
      vertical: true
    }
  },
  methods: {
    compute() {
      this.$store.commit('computePoints', this.group)
    },
    next() {
      ++this.step
    },
    previous() {
      --this.step
    }
  }
}
</script>
