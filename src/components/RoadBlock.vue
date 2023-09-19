<template>
  <div class="roadblock" :style="colors">
    <div class="title">
      <h2>{{ title }}</h2>
    </div>
    <table>
      <tr>
        <th>Code</th>
        <th>Credit</th>
        <th>Select</th>
      </tr>
      <tr
        v-for="(module, index) in modules"
        v-bind:key="`${module.title}-${index}`"
      >
        <td>{{ module.title }}</td>
        <td
          v-if="!module.isChangeable"
          :class="index % 2 ? 'content-child' : 'content'"
        >
          {{ module.credit }}
        </td>
        <td v-else>
          <input
            type="number"
            min="0"
            max="8"
            :class="index % 2 ? 'content-child' : 'content'"
            @input="updateModuleCredits(module, $event.target.value)"
          />
        </td>
        <td :class="index % 2 ? 'content-child' : 'content'">
          <input
            @click="select(module, $event)"
            type="checkbox"
            name="select"
            id="select"
          />
        </td>
      </tr>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>{{ totalCredit(modules) }}</th>
          <th class="select-credit">{{ total }}</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
export default {
  name: "RoadBlock",
  emits: ["select"],
  props: {
    title: String,
    modules: Array,
    requireCredit: Number,
    colors: Object,
  },

  data() {
    return {
      total: 0,
      totalCredit(modules) {
        return modules.reduce((acc, actual) => {
          return acc + +actual.credit;
        }, 0);
      },
    };
  },
  methods: {
    updateModuleCredits(module, newValue) {
      if (module.isSelected) {
        this.total -= +module.credit;
        this.total += +newValue;
      }
      module.credit = newValue;
    },
    select(module, e) {
      const selectTotal = this.$el.querySelector(".select-credit");
      if (e.target.checked) {
        this.total += +module.credit;
        module.isSelected = true;
      } else {
        this.total -= +module.credit;
        module.isSelected = false;
      }
      if (+this.total < +this.$props.requireCredit) {
        selectTotal.style.backgroundColor = "red";
      } else {
        selectTotal.style.backgroundColor = "green";
      }
      this.$emit("select", {
        selectTotal,
        credit: module.credit,
        isSelected: module.isSelected,
      });
    },
  },
};
</script>

<style scoped>
.title {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: var(--primary-bg);
}
.title > h2 {
  margin: 1rem;
  color: white;
}
.roadblock {
  display: flex;
  flex-direction: column;
  align-items: center;
}
table,
td,
th {
  border: 1px solid white;
}
table {
  background-color: var(--primary-bg);
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
tr {
  text-align: center;
  color: white;
}
.content {
  background-color: var(--secondary-bg);
  color: black;
}
.content-child {
  background-color: var(--third-bg);
  color: black;
}
</style>
