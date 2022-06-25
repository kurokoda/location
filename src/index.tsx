import "bootstrap/dist/css/bootstrap.min.css";

import "./client/style/index.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";

import { reportWebVitals } from "./client/service";
import { MessageCard } from "./client/component";
import { Layout } from "./client/component/layout";
import { HomePage, LocationDetailPage, LocationListPage } from "./client/page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="location-detail" element={<LocationDetailPage />} />
          <Route path="location-list" element={<LocationListPage />} />
        </Route>
        <Route
          path="*"
          element={
            <MessageCard
              icon="error"
              text="This page does not exist"
              title="Oops!"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
