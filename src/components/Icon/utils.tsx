import React from "react";
import MUIAddIcon from "@material-ui/icons/Add";
import MUIArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import MUIChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MUIChevronRightIcon from "@material-ui/icons/ChevronRight";
import MUICloseIcon from "@material-ui/icons/Close";
import MUIDeleteIcon from "@material-ui/icons/Delete";
import MUIEditIcon from "@material-ui/icons/Edit";
import MUIFilterListIcon from "@material-ui/icons/FilterList";
import MUIFirstPageIcon from "@material-ui/icons/FirstPage";
import MUILastPageIcon from "@material-ui/icons/LastPage";
import MUIMenuIcon from "@material-ui/icons/Menu";
import MUIOpenInNew from "@material-ui/icons/OpenInNew";
import MUIPlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import MUIPrintIcon from "@material-ui/icons/Print";
import MUIRefreshIcon from "@material-ui/icons/Refresh";
import MUISearchIcon from "@material-ui/icons/Search";
import MUISendIcon from "@material-ui/icons/Send";
import { Icons } from "../../types/Icon";

export const iconsCatalog = {
  [Icons.add]: <MUIAddIcon />,
  [Icons.arrowUp]: <MUIArrowUpwardIcon />,
  [Icons.close]: <MUICloseIcon />,
  [Icons.delete]: <MUIDeleteIcon />,
  [Icons.edit]: <MUIEditIcon />,
  [Icons.filter]: <MUIFilterListIcon />,
  [Icons.first]: <MUIFirstPageIcon />,
  [Icons.last]: <MUILastPageIcon />,
  [Icons.menu]: <MUIMenuIcon />,
  [Icons.next]: <MUIChevronRightIcon />,
  [Icons.openInNew]: <MUIOpenInNew />,
  [Icons.playlistAddCheck]: <MUIPlaylistAddCheckIcon />,
  [Icons.prev]: <MUIChevronLeftIcon />,
  [Icons.print]: <MUIPrintIcon />,
  [Icons.refresh]: <MUIRefreshIcon />,
  [Icons.search]: <MUISearchIcon />,
  [Icons.send]: <MUISendIcon />,
};
