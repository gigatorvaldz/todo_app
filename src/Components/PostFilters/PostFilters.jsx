import React from "react";
import StandartSelect from "../StandartSelect/StandartSelect";
import StandartInput from "../StandartInput/StandartInput";
import { useTranslation } from "react-i18next";
import "../../Utils/i18next";

function PostFilters({ setFilter, searchInput, setSearchInput }) {
  const { t } = useTranslation();

  const filterOptions = [
    { name: t("todo.bodysearch"), value: "body" },
    { name: t("todo.titlesearch"), value: "title" },
  ];

  return (
    <div className="PostFilters">
      <h1>{t("todo.sort")}</h1>
      <StandartSelect
        options={filterOptions}
        onChange={setFilter}
        defaultOptoin={t("todo.sortchoose")}
      />
      <StandartInput
        placeholder={t("todo.search")}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default PostFilters;
