import { Integration } from "./integration";

export interface IntegratorFactory {
  integrateOverlay(): Integration;
  integrateEvents(): Integration;
}