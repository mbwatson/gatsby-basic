/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


import React from "react"

import { AuthProvider } from "./src/contexts"
import { Dashboard } from './src/layouts'

export const wrapPageElement = ({ element }) => (
    <AuthProvider>
        <Dashboard>
            { element }
        </Dashboard>
    </AuthProvider>
)
