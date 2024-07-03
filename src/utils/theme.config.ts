import { ThemeConfig } from "antd";

export const getThemeConfig = (): ThemeConfig | undefined => {
  return {
    token: {
      colorPrimary: "#374D41",
    },
    components: {
      Input: { borderRadius: 8, controlHeight: 50 },
      Button: { borderRadius: 8 },
    },
  };
};
