import { useEffect, useRef } from "react";

import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { State } from "@shared/state";
import { useQueryClient } from "@tanstack/react-query";

import { EmptyCourseState, PersonalCourseList } from "../components";
import { usePersonalCoursesContext } from "../contexts";
import { invalidatePersonalCourses } from "../queries";
import type { personalCoursePayload } from "../types";
export const PersonalCoursePage = () => {
  Navigation.hooks.useScrollToTopOnRouteChange();

  const queryClient = useQueryClient();
  const { show: showToast } = Toast.use();
  const [payload] = State.useTemporary(
    Navigation.hooks.usePayload<personalCoursePayload>(),
  );
  const consumePayload = Navigation.hooks.useConsumePayload();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!payload?.toastState || hasShownToast.current) return;
    showToast(payload.toastState);
    if (payload?.shouldInvalidate) {
      invalidatePersonalCourses(queryClient);
    }
    hasShownToast.current = true;

    consumePayload();
  }, [payload, showToast, consumePayload, queryClient]);

  const { courses } = usePersonalCoursesContext();
  const isEmpty = courses.length === 0;

  return isEmpty ? (
    <EmptyCourseState />
  ) : (
    <PersonalCourseList courses={courses} />
  );
};
