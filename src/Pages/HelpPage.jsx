import { useTranslation } from "react-i18next";
import "../Utils/i18next";

function HelpPage() {
  const { t } = useTranslation();

  return <div className="HelpPageWrapper">{t("title")}</div>;
}

export default HelpPage;
