import { useEffect, useRef } from "react";

import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { State } from "@shared/state";

import { EmptyCourseState, PersonalCourseList } from "../components";
import { usePersonalCoursesContext } from "../contexts";
export const ProfileCourse = () => {
  Navigation.hooks.useScrollOnRouteChange();

  const { show: showToast } = Toast.use();
  const [toastState] = State.useTemporary(Navigation.hooks.usePayload());
  const consumePayload = Navigation.hooks.useConsumePayload();
  const hasShownToast = useRef(false);
  useEffect(() => {
    if (!toastState || hasShownToast.current) return;
    showToast(toastState);
    hasShownToast.current = true;

    consumePayload();
  }, [toastState, showToast, consumePayload]);

  const { courses } = usePersonalCoursesContext();

  const isEmpty = courses.length === 0;

  return isEmpty ? (
    <EmptyCourseState />
  ) : (
    <PersonalCourseList courses={courses} />
  );
};
