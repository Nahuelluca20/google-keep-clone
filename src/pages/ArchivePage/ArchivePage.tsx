import React from "react";

import {EmptyPage} from "@/components/EmptyPage";
import Arhive from "@/assets/archive-note.svg";

export interface ArchivePageProps {}

const ArchivePage: React.FC<ArchivePageProps> = () => {
  return (
    <div>
      <EmptyPage image={Arhive} text="archive" />
    </div>
  );
};

export default ArchivePage;
