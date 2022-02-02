import React from "react";
import { CategoryWrapper, CategoryList, CategoryItem } from "./styled";
import { StyledHeading } from "../../../../styles/common";
import { useGQLQuery } from "../../../../hooks/useGQLQuery";
import { AllCategoryDocument } from "../../../../generated/graphql";
import { IResponseData } from "../../types";

const Category = (): JSX.Element => {
  const { data, isLoading } = useGQLQuery<IResponseData>("categories", AllCategoryDocument);

  if (isLoading) return <p>Loading...</p>;
  return (
    <CategoryWrapper>
      <StyledHeading>
        <h3>Thể loại phim</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </StyledHeading>
      <CategoryList>
        {data?.categories?.map((item) => (
          <CategoryItem key={item._id} href="#!">
            <h3>{item.name}</h3>
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryWrapper>
  );
};

export default Category;
