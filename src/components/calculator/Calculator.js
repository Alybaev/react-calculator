import div from "react";
import CalcButton from ".././calculator/CalcButton";

export default function Calculator(props) {
  return (
    <div class="grid-calc">
      <div class="output">
        <div class="previous"></div>
        <div class="current"></div>
      </div>
      <CalcButton gridColumnSpan="2">AC</CalcButton>
      <CalcButton>1</CalcButton>
      <CalcButton>2</CalcButton>
      <CalcButton>3</CalcButton>
      <CalcButton>4</CalcButton>
      <CalcButton>5</CalcButton>
      <CalcButton>6</CalcButton>
      <CalcButton>7</CalcButton>
      <CalcButton>8</CalcButton>
      <CalcButton>9</CalcButton>
    </div>
  );
}
