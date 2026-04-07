import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { MobileQuestionPalette } from "./MobileQuestionPalette";
import { DesktopQuestionPalette } from "./DesktopQuestionPalette";

type QuestionPaletteProps = {
  questionRefs: React.RefObject<(HTMLDivElement | null)[]>;
  confirmed: Record<string, boolean>;
  mode?: "mobile" | "desktop";
};

export const QuestionPalette = ({
  questionRefs,
  confirmed,
  mode,
}: QuestionPaletteProps) => {
  const { data } = useSelector((state: RootState) => state.questions);
  const totalQuestions = data.length;
  const completedQuestions = Object.keys(confirmed).length;
  const progressPercentage = totalQuestions > 0
    ? Math.round((completedQuestions / totalQuestions) * 100)
    : 0;

  return (
    <>
      {/* MOBILE MANIFESTATION */}
      {(!mode || mode === "mobile") && (
        <MobileQuestionPalette
          data={data}
          confirmed={confirmed}
          questionRefs={questionRefs}
          progressPercentage={progressPercentage}
        />
      )}

      {/* DESKTOP MANIFESTATION */}
      {(!mode || mode === "desktop") && (
        <DesktopQuestionPalette
          data={data}
          confirmed={confirmed}
          questionRefs={questionRefs}
          progressPercentage={progressPercentage}
          completedQuestions={completedQuestions}
        />
      )}
    </>
  );
};
