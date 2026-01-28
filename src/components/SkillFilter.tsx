import { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SkillFilterProps {
  onFilterChange: (filter: string) => void;
}

const SkillFilter = ({ onFilterChange }: SkillFilterProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (value: string) => {
    setSearchTerm(value);
    onFilterChange(value.toLowerCase());
  };

  const clearFilter = () => {
    setSearchTerm('');
    onFilterChange('');
  };

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full pl-10 pr-10 py-3 rounded-lg bg-card border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all"
        />
        {searchTerm && (
          <button
            onClick={clearFilter}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-secondary transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SkillFilter;
