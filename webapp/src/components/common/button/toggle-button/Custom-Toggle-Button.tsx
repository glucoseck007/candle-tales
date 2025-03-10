import { useTranslation } from "react-i18next";
import CustomButton from "../custom-button/Custom-Button";

import "./toggle-button.css";
import { useState } from "react";

interface CustomToggleButtonProps {
  //   isSelected?: boolean;
  onRoleChange: (role: "student" | "parent") => void;
}

function CustomToggleButton({ onRoleChange }: CustomToggleButtonProps) {
  const { t } = useTranslation();
  const [selectStudent, setSelectStudent] = useState(true);

  const handleSelected = () => {
    if (selectStudent) {
      setSelectStudent(false);
      onRoleChange("parent");
    } else {
      setSelectStudent(true);
      onRoleChange("student");
    }
  };

  return (
    <>
      <span className="toggle-btn-label">{t("auth.inputLabel.role")}</span>
      <span className="required-asterisk"> *</span>
      <div className="toggle-btn-container">
        <CustomButton
          title={t("auth.buttonTitle.student")}
          color={selectStudent ? "white" : "#0339a6"}
          backgroundColor={selectStudent ? "#001568" : "transparent"}
          onClick={handleSelected} // Trigger toggle and role change
        />
        <CustomButton
          title={t("auth.buttonTitle.teacher")}
          color={!selectStudent ? "white" : "#0339a6"}
          backgroundColor={!selectStudent ? "#001568" : "transparent"}
          onClick={handleSelected} // Trigger toggle and role change
        />
      </div>
    </>
  );
}

export default CustomToggleButton;
