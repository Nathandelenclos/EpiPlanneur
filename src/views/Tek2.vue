<script lang="ts">
import RoadBlock from "@/components/RoadBlock.vue";
export default {
  name: "HomeView",
  components: { RoadBlock },
  data() {
    return {
      roadBlock: [
        {
          title: "Foundation (13req)",
          require: 13,
          colors: {
            "--primary-bg": "#4472c4",
            "--secondary-bg": "#b4c6e7",
            "--third-bg": "#d9e1f2",
          },
          modules: [
            {
              title: "B-CCP-400",
              credit: 4,
            },
            {
              title: "B-NWP-400",
              credit: 5,
            },
            {
              title: "B-OOP-400",
              credit: 6,
            },
            {
              title: "B-PDG-300",
              credit: 5,
            },
            {
              title: "B-YEP-400",
              credit: 5,
            },
          ],
        },
        {
          title: "Supplement (6req)",
          require: 6,
          colors: {
            "--primary-bg": "#5b9bd5",
            "--secondary-bg": "#bdd7ee",
            "--third-bg": "#ddebf7",
          },
          modules: [
            {
              title: "B-CNA-410",
              credit: 2,
            },
            {
              title: "B-MAT-400",
              credit: 3,
            },
            {
              title: "B-ASM-400",
              credit: 2,
            },
            {
              title: "B-FUN-400",
              credit: 4,
            },
            {
              title: "B-DOP-400",
              credit: 2,
            },
            {
              title: "B-PSU-400",
              credit: 5,
            },
            {
              title: "B-SEC-400",
              credit: 2,
            },
          ],
        },
        {
          title: "Innovation (4req)",
          require: 4,
          colors: {
            "--primary-bg": "#70ad47",
            "--secondary-bg": "#c6e0b4",
            "--third-bg": "#e2efda",
          },
          modules: [
            {
              title: "B-INN-400",
              credit: 8,
            },
            {
              title: "B-JAM-001",
              credit: 3,
            },
            {
              title: "B-CUS-00x",
              credit: 2,
            },
            {
              title: "B-EPI-010",
              credit: 6,
            },
          ],
        },
        {
          title: "Soft Skills (3req)",
          require: 3,
          colors: {
            "--primary-bg": "#ed7d31",
            "--secondary-bg": "#f8cbad",
            "--third-bg": "#fce4d6",
          },
          modules: [
            {
              title: "B-PRO-400",
              credit: 2,
            },
            {
              title: "B-PCP-000",
              credit: 2,
            },
            {
              title: "B-PMP-400",
              credit: 3,
            },
          ],
        },
      ],
      grandTotal: 0,
    };
  },
  methods: {
    updateGrandTotal({ credit }) {
      this.grandTotal += +credit;
    },
  },
};
</script>

<template>
  <h1>Tek2</h1>
  <div class="home">
    <RoadBlock
        v-for="(road, index) in roadBlock"
        :key="index"
        class="roadblock"
        :title="road.title"
        :modules="road.modules"
        :require-credit="road.require"
        :colors="road.colors"
        @select="updateGrandTotal"
    />
  </div>
  <p class="center">Total Credit: {{ grandTotal }}</p>
</template>

<style scoped>
h1 {
  width: 100%;
  text-align: center;
}
.home {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.center {
  text-align: center;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
}

.roadblock {
  margin-bottom: 50px;
}
</style>
