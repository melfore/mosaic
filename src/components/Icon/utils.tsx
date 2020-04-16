import React from "react";
import MUIAddIcon from "@material-ui/icons/Add";
import MUICloseIcon from "@material-ui/icons/Close";
import MUIDeleteIcon from "@material-ui/icons/Delete";
import MUIEditIcon from "@material-ui/icons/Edit";
import MUIOpenInNew from "@material-ui/icons/OpenInNew";
import MUIPlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import MUISendIcon from "@material-ui/icons/Send";
import { Icons } from "../../types/Icon";

export const iconsCatalog = {
  [Icons.add]: <MUIAddIcon />,
  [Icons.close]: <MUICloseIcon />,
  [Icons.delete]: <MUIDeleteIcon />,
  [Icons.edit]: <MUIEditIcon />,
  [Icons.openInNew]: <MUIOpenInNew />,
  [Icons.playlistAddCheck]: <MUIPlaylistAddCheckIcon />,
  [Icons.send]: <MUISendIcon />,
};
