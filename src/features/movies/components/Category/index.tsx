import React from "react";
import { CategoryWrapper, CategoryList, CategoryItem } from "./styled";
import { StyledHeading } from "../../../../styles/common";

const Category = () => {
  return (
    <CategoryWrapper>
      <StyledHeading>
        <h3>Thể loại phim</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </StyledHeading>
      <CategoryList>
        <CategoryItem href="#!">
          <h3>Hành động</h3>
        </CategoryItem>
        <CategoryItem>
          <h3>Hành động</h3>
        </CategoryItem>
        <CategoryItem>
          <h3>Hành động</h3>
        </CategoryItem>
        <CategoryItem>
          <h3>Hành động</h3>
        </CategoryItem>
        <CategoryItem>
          <h3>Hành động</h3>
        </CategoryItem>
        <CategoryItem>
          <h3>Hành động</h3>
        </CategoryItem>
        <CategoryItem>
          <h3>Hành động</h3>
        </CategoryItem>
      </CategoryList>
    </CategoryWrapper>
  );
};

export default Category;
