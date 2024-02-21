import { lazy, Suspense } from "react";

const AvatarComponent = lazy(() => import("./AvatarComponent"));

const renderLoader = () => <p>Loading</p>;

const SuspenseFallbackLazy = () => (
  <Suspense fallback={renderLoader()}>
    <AvatarComponent />
  </Suspense>
);

export default SuspenseFallbackLazy;
