import { defineStore, Store } from "pinia";
import { computed, ref } from "vue";

import { positionListData, jobListData } from "./hrDashboardData.js";

export const useHrDashboardStore = defineStore("hrDashboard", () => {
  // state
  const positionListRef = ref<any>(positionListData);
  const jobListRef = ref<any>(jobListData);

  // computed
  const positionList = computed(() => positionListRef.value);
  const jobList = computed(() => jobListRef.value);

  // actions
  // Handle position list
  const setPositionList = (payload: any) => {
    payload.job_id = positionList.value.length + 1;
    positionListRef.value.push(payload);
  };
  const deletePositionList = (payload: number) => {
    positionListRef.value = positionListRef.value.filter(
      (position: any) => position.job_id !== payload
    );
  };

  // Handle job list
  const setJobList = (payload: any) => {
    payload.job_id = jobList.value.length + 1;
    payload.isPosted = false;
    jobListRef.value.push(payload);
  };
  const deleteJobPost = (payload: number) => {
    jobListRef.value = jobListRef.value.filter(
      (job: any) => job.job_id !== payload
    );
  };
  const approvedJobPost = (payload: number) => {
    jobListRef.value.forEach((job: any) => {
      if (job.job_id === payload) {
        job.isPosted = true;
      }
    });
  };

  return {
    positionList,
    setPositionList,
    deletePositionList,

    jobList,
    setJobList,
    approvedJobPost,
    deleteJobPost,
  };
});
