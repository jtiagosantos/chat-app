type AnimationStylesOption = Record<string, any>;

export interface AnimationStyles {
  from: AnimationStylesOption;
  enter: AnimationStylesOption;
  leave: AnimationStylesOption;
}