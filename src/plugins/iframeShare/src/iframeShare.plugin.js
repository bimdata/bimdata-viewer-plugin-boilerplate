import IframeShareComponent from "./IframeShare.vue";
import icon from "../assets/share.svg";

export default {
  name: "IframeSharePlugin", // The name of the plugin. this.$plugins.MyPluginName to access it from other plugins
  component: IframeShareComponent,
  addToWindows: ["3d", "2d"],
  button: {
    position: "right", // Add an icon in the left or right panel. Value can be "left" or "right"
    content: "simple", // How the viewer show the plugin content. Value can be "windowed", "simple" of "free"
    keepOpen: true, // If true, the window won't be closed if user click somewhere else.
    tooltip: "IframeSharePlugin.tooltip", // Can be an i18n path or a string shown in all languages
    icon: {
      imgUri: icon,
    },
  },
  i18n: {
    en: {
      tooltip: "Share the viewer",
      link_creation: "Generate a link",
      keep_camera_setup: "Keep camera position",
      copy: "Copy",
      copy_success: "Copied!",
      params: "Share params",
      manage_shares: "Manage shares",
      expiration_date: "Expiration date",
      share: "Share",
    },
    fr: {
      tooltip: "Partager le viewer",
      link_creation: "Générer un lien",
      keep_camera_setup: "Conserver la position de la caméra",
      copy: "Copier",
      copy_success: "Copié !",
      params: "Paramètres de partage",
      manage_shares: "Gestion des partages",
      expiration_date: "Date d'expiration",
      share: "Partager",
    },
  },
};
