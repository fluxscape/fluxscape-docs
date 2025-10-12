import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function CLIRedirect() {
  const history = useHistory();

  useEffect(() => {
    // Preserve hash (#requirements) and query (?foo=bar) if present
    const { hash, search } = window.location;
    history.replace('/docs/cli' + search + hash);
  }, [history]);

  return null;
}