import { useEffect, useState } from 'react';

import { fetchPOAPsWithENS, fetchPOAPsWithTokens } from '../../api';
import { NimiPOAPWidgetContext, POAPToken } from '../../types';

export function useFetchPOAPs(ensAddress: string, widget?: NimiPOAPWidgetContext) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<POAPToken[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function startFetching() {
      setLoading(true);

      try {
        if (widget?.tokenIds?.length) {
          const tokensData = await fetchPOAPsWithTokens(widget.tokenIds);

          setData(tokensData);
        } else {
          const { data: tokensData } = await fetchPOAPsWithENS(ensAddress);

          setData(tokensData.slice(0, 6));
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    startFetching();
  }, [ensAddress, widget]);

  return {
    loading,
    data,
    error,
  };
}
