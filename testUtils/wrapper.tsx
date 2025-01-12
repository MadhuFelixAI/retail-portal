import { Provider as DateProvider } from "@dashboard/components/Date/DateContext";
import { Locale, RawLocaleProvider } from "@dashboard/components/Locale";
import { TimezoneProvider } from "@dashboard/components/Timezone";
import { ExternalAppProvider } from "@dashboard/new-apps/components/ExternalAppContext";
import { ThemeProvider } from "@saleor/macaw-ui";
import React from "react";
import { IntlProvider } from "react-intl";

import { ApolloMockedProvider } from "./ApolloMockedProvider";

const Wrapper: React.FC = ({ children }) => (
  <ApolloMockedProvider>
    <IntlProvider defaultLocale={Locale.EN} locale={Locale.EN}>
      <RawLocaleProvider
        value={{
          locale: Locale.EN,
          setLocale: () => undefined,
        }}
      >
        <DateProvider value={+new Date("2018-08-07T14:30:44+00:00")}>
          <TimezoneProvider value="America/New_York">
            <ThemeProvider>
              <ExternalAppProvider>{children}</ExternalAppProvider>
            </ThemeProvider>
          </TimezoneProvider>
        </DateProvider>
      </RawLocaleProvider>
    </IntlProvider>
  </ApolloMockedProvider>
);

export default Wrapper;
