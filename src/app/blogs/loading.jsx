import React from "react";

import Spinner from "@/ui/spinner";

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center gap-x-4">
      <span>در حال بارگذاری پست ...</span>
      <Spinner />
    </div>
  );
}

export default Loading;
