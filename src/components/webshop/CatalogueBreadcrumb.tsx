import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface Props {
  topName?: string;
  topSlug?: string;
  subName?: string;
  count?: number;
  onNavigate: (topSlug?: string, subSlug?: string) => void;
}

/** McMaster-style header: "N Products | Webshop › Top › Sub". */
export const CatalogueBreadcrumb = ({ topName, topSlug, subName, count, onNavigate }: Props) => (
  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
    {typeof count === 'number' && (
      <span className="text-sm font-semibold text-foreground">{count} Products</span>
    )}
    <Breadcrumb>
      <BreadcrumbList className="text-sm">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <button type="button" className="text-primary hover:underline" onClick={() => onNavigate()}>
              Webshop
            </button>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {topName && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {subName ? (
                <BreadcrumbLink asChild>
                  <button
                    type="button"
                    className="text-primary hover:underline"
                    onClick={() => onNavigate(topSlug)}
                  >
                    {topName}
                  </button>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{topName}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </>
        )}
        {subName && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{subName}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  </div>
);
